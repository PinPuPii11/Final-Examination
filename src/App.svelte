<script>
	import { islogin, mode } from './stores.js';
	import List from "./components/Lists.svelte";
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
	import Menu from './Menu.svelte';
	import Confirm from "./stores.js";
	// import ComfirmPayment from "./Confirm.svelte";
</script>

<center>
<h1>SoftLottery</h1>

{#if !$islogin}
<Login />
{:else}
	<List />
	{#if $mode == 'menu'}
	<Menu />
	{:else if $mode == 'confirm'}
	<Confirm />
	<!-- {:else if $mode == 'confirmPayment'}
	<ConfirmPayment /> -->
	{/if}
<Logout />
{/if}

</center>