const functions = require("firebase-functions");

exports.calculateFormCompletion = functions.firestore
    .document("submissions")
    .onWrite((change, context) => {
        console.log(change.after.data());
    });
