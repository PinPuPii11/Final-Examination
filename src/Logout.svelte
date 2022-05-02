<script>
    import { islogin, mode } from './stores.js';
  
    function logout() {
      $islogin = false;
      $mode = '';
    }
</script>

<button on:click={logout}>Log Out</button>