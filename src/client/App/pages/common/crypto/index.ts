import { secretbox, randomBytes } from 'tweetnacl';
import {
  decodeUTF8,
  encodeUTF8,
  encodeBase64,
  decodeBase64
} from 'tweetnacl-util';

const newNonce = () => randomBytes(secretbox.nonceLength);

export const generateKey = () => encodeBase64(randomBytes(secretbox.keyLength));

export const stringToBytes = (value: string): Uint8Array => new Uint8Array(
  value.split('').reduce((res, char, index) => [
    ...res,
    value.charCodeAt(index),
  ], [])
);

export const generateKeyByPassword = (password: string) => {
  let bytes = stringToBytes(password);

  while ([...bytes].length < secretbox.keyLength) {
    bytes = new Uint8Array([...bytes, ...bytes]);
  }

  bytes = new Uint8Array([...bytes].slice(0, secretbox.keyLength));

  return encodeBase64(bytes);
};

export const encrypt = (json: Object, key) => {
  const keyUint8Array = decodeBase64(key);

  const nonce = newNonce();
  const messageUint8 = decodeUTF8(JSON.stringify(json));

  console.log(keyUint8Array)

  const box = secretbox(messageUint8, nonce, keyUint8Array);

  const fullMessage = new Uint8Array(nonce.length + box.length);
  fullMessage.set(nonce);
  fullMessage.set(box, nonce.length);

  const base64FullMessage = encodeBase64(fullMessage);
  return base64FullMessage;
};

export const decrypt = (messageWithNonce, key) => {
  const keyUint8Array = decodeBase64(key);
  const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
  const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
  const message = messageWithNonceAsUint8Array.slice(
    secretbox.nonceLength,
    messageWithNonce.length
  );

  const decrypted = secretbox.open(message, nonce, keyUint8Array);

  if (!decrypted) {
    throw new Error('Could not decrypt message');
  }

  const base64DecryptedMessage = encodeUTF8(decrypted);
  return JSON.parse(base64DecryptedMessage);
};
