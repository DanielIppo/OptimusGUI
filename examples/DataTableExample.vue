<template>
  <section class="example-section">
    <h2>DataTable & Data Presentation</h2>

    <OgDataTable :value="products" paginator :rows="3" stripedRows showGridlines>
      <template #header>
        <h3>Product Inventory</h3>
      </template>

      <OgColumn field="id" header="ID" sortable style="width: 80px;" />
      <OgColumn field="name" header="Name" sortable />
      <OgColumn field="category" header="Category" sortable />
      <OgColumn field="price" header="Price" sortable>
        <template #body="{ data }">
          ${{ data.price.toFixed(2) }}
        </template>
      </OgColumn>
      <OgColumn field="status" header="Status">
        <template #body="{ data }">
          <OgTag :value="data.status" :severity="data.status === 'IN STOCK' ? 'success' : 'danger'" />
        </template>
      </OgColumn>
    </OgDataTable>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { OgDataTable, OgColumn, OgTag } from '../src';

const products = ref([
  { id: 101, name: 'Wireless Headphones', category: 'Electronics', price: 99.99, status: 'IN STOCK' },
  { id: 102, name: 'Ergonomic Chair', category: 'Furniture', price: 249.50, status: 'IN STOCK' },
  { id: 103, name: 'Mechanical Keyboard', category: 'Electronics', price: 129.00, status: 'OUT OF STOCK' },
  { id: 104, name: '4K Monitor', category: 'Electronics', price: 399.99, status: 'IN STOCK' },
  { id: 105, name: 'Standing Desk', category: 'Furniture', price: 499.00, status: 'IN STOCK' },
]);
</script>

<style scoped>
.example-section {
  margin-bottom: 2rem;
}
</style>
