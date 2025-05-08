import inventoryData from '../mock/inventory';
import equipmentData from '../mock/equipment';
import equipmentMetricsData from '../mock/equipmentMetrics';
import transactionsData from '../mock/transactions';
import usersData from '../mock/users';

let inventory = [...inventoryData]; // Copia mutable

export const getInventory = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(inventory), 500));
};

export const addInventoryItem = async (item) => {
  inventory.push(item);
  return new Promise((resolve) => setTimeout(() => resolve(item), 500));
};

export const deleteInventoryItem = async (id) => {
  inventory = inventory.filter((item) => item.id !== id);
  return new Promise((resolve) => setTimeout(() => resolve(), 500));
};

export const getEquipment = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(equipmentData), 500));
};

export const getEquipmentMetrics = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(equipmentMetricsData), 500));
};

export const getTransactions = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(transactionsData), 500));
};

export const getUsers = async () => {
  return new Promise((resolve) => setTimeout(() => resolve(usersData), 500));
};
