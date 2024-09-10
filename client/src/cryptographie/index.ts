import { ec as EC } from 'elliptic';
import crypto from 'crypto';

const ec = new EC('secp256k1');

export function hashPassword(password: string): string {
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
}

export function comparePasswordHash(password: string, hashedPassword: string): boolean {
    return hashPassword(password) === hashedPassword;
}