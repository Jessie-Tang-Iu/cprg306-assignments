import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";


export async function getItems(userId, itemsListStateSetter) {
    try {
        const allItemsReference = collection(db, "users", userId, "items");
        const allItemsQuery = query(allItemsReference);
        const querySnapshot = await getDocs(allItemsQuery);
        let itemsList = [];
        querySnapshot.forEach( (doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemsList.push(thisItem);
        } );
        itemsListStateSetter(itemsList);
    } catch (error) {
        console.log(error);
    }
}

export async function addItem(userId, itemObj) {
    try {
        const newItemReference = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemReference, itemObj);
        console.log(newItemPromise.id);
    } catch (error) {
        console.log(error);
    }
}