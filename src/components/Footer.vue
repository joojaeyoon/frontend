<template>
  <div class="footer">
    <div class=" mt-5">
      <a href="https://github.com/joojaeyoon/backend" class="git">
        <i class="devicon-github-plain colored"></i> Github
      </a>
    </div>
    <div class="mt-2">
      © 2020 Jaeyoon Joo
    </div>
    <div class="mt-2 mb-5">
      jaeyoon@jooz.dev
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  float: left;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  clear: both;
  margin-top: 3em;
  color: #646769;
  background-color: #f2f3f3;
  width: 100%;
  text-align: left;
}
.footer > div {
  clear: both;
  margin-top: 2em;
  max-width: 100%;
  margin-left: 30px;
}
.git {
  text-decoration: none;
  color: #646769;
  font-weight: bold;
  padding-right: 10px;
  white-space: nowrap;
}
.git:hover {
  text-decoration: none;
  color: #646769;
}
</style>
