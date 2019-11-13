<template>
  <div>
    <h1>Recherche</h1>
    <form>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Nom patient</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="nomPatient" placeholder="Nom Patient">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Prénom patient</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="prenomPatient" placeholder="Prénom Patient">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Date début <span class="requis">*</span></label>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="dateDebut" placeholder="Date début">
        </div>
      </div>
      <div class="form-group row">
        <label for="" class="col-sm-2 col-form-label">Date fin <span class="requis">*</span></label>
        <div class="col-sm-10">
          <input type="date" class="form-control" id="dateFin" placeholder="Date Fin">
        </div>
      </div>
    </form>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
  }
}
</script>
<style>
  .requis {
    color: red;
  }
</style>
