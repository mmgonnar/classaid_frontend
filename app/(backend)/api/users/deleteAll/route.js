import { deleteAllUsers } from '@/controllers/user/deleteAll';

export async function DELETE() {
  return deleteAllUsers();
}
