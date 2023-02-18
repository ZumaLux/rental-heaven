import { db } from "./firebase-config";
import { doc, updateDoc } from "firebase/firestore";

//CHECK CUSTOMER'S LEVEL OF ACCESS
export const isMainAdmin = (user) => {
  if (user?.accessLevel === 5) return true;
  return false;
};
export const isAdmin = (user) => {
  if (user?.accessLevel >= 4) return true;
  return false;
};
export const isUser = (user) => {
  if (user?.accessLevel >= 0) return true;
  return false;
};

//SET-REVOKE ADMIN ROLE
export async function setAdminRole(path, user) {
  if (user.accessLevel < 4) {
    if (window.confirm(`Do you want to give ADMIN STATUS to ${user.name} ${user.surname}?`)) {
      user.accessLevel = 4;
      const { id, ...userData } = user; //remove id before upload
      const itemDocRef = doc(db, path, user.id);
      await updateDoc(itemDocRef, userData).then((res) => {
        console.log("Admin added Successfully!");
      });
      return true;
    }
    return false;
  } else if (user.accessLevel === 4) {
    if (window.confirm(`Do you want to revoke ADMIN STATUS from ${user.name} ${user.surname}?`)) {
      user.accessLevel = 0;
      const { id, ...userData } = user; //remove id before upload
      const itemDocRef = doc(db, path, user.id);
      await updateDoc(itemDocRef, userData).then((res) => {
        console.log("Admin Status Revoked!");
      });
      return true;
    }
    return false;
  }
}
