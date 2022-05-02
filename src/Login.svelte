<script>
    import { accounts, account, islogin, mode} from './stores.js';
    
    let accountNo = '';
    let pin = '';
  
    function checkLogin() {
      if (!(accountNo in $accounts) || $accounts[accountNo].pin != pin) {
        alert('Incorrect Account Number or PIN');
      } else {
        $islogin = true;
        $mode = 'menu';
        $account = accountNo;
        accountNo = '';
        pin = '';
      }
    }
  </script>
  
<input bind:value={accountNo} placeholder="Account No">
<input type="password" bind:value={pin} placeholder="PIN">
<button on:click={checkLogin}>Log In</button>

<style>
    :global(input, button) {
        display: flex;
        margin: 6px;
    }
</style>