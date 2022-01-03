<template>
  <section class="index-section" id="index-section">
    <div class="row">
      <div class="col-12">
        <Card>
          <template #title> Advanced Card </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary"
              style="margin-left: 0.5em"
            />
          </template>
        </Card>
        <h1>Income Tax Calculator</h1>
        <p>lorem ipsum</p>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "Index",
  components: {
    Card,
    Button,
  },
};
</script>
<style lang="scss">
.index-section {
  h1 {
    color: red;
  }
}
</style>
