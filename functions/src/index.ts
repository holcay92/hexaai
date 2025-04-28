import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

interface SimulateProcessingData {
  docId: string;
}

export const simulateProcessing = functions.https.onCall(
  async (request: functions.https.CallableRequest<SimulateProcessingData>) => {
    const { docId } = request.data;

    if (!docId) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Document ID is required"
      );
    }

    const db = admin.firestore();
    const docRef = db.collection("generations").doc(docId);

    try {
      await docRef.update({
        status: "processing",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      await new Promise((resolve) => setTimeout(resolve, 5000));

      await docRef.update({
        status: "done",
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      return { success: true };
    } catch (error) {
      console.error("simulateProcessing error:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Failed to simulate processing"
      );
    }
  }
);
