<script>
	import { islogin, mode } from './stores.js';
	import List from "./components/Lists.svelte";
	import Login from './Login.svelte';
	import Logout from './Logout.svelte';
	import Menu from './Menu.svelte';
</script>

<h1>SoftLottery</h1>
<h2>งวดนี้รวย!!</h2>

{#if !$islogin}
<Login />
{:else}
	<List />
	{#if $mode == 'menu'}
	<Menu />
	<!-- {:else if $mode == 'deposit'}
	<Deposit />
	{:else if $mode == 'withdraw'}
	<Withdraw />
	{:else if $mode == 'balance'}
	<CheckBalance /> -->
	{/if}
<Logout />
{/if}