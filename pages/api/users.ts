import type { NextApiRequest, NextApiResponse } from 'next';
const { cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('../../firebase-test-serviceAccount.json'); // 秘密鍵を取得
const admin = require('firebase-admin');
import { QueryDocumentSnapshot } from 'firebase/firestore';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const COLLECTION_NAME = 'users';
  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: cert(serviceAccount),
    });
  }
  const db = getFirestore();

  if (req.method === 'GET') {
    const snapshot = await db.collection(COLLECTION_NAME).get();
    res
      .status(200)
      .send(snapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data()));
    return;
  }
  res.status(200);
}
