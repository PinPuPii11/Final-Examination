<script>
    import List from "./components/Lists.svelte";
    import { items } from "../stores";
    import { accounts, account, mode } from './stores.js';

    $: itemCount = $items.length;
    $: completedItemCount = $items.filter(item => item.completed).length;

    function confirmPayment() {
        $accounts[$account].balance += 80;
    }
</script>

<div class="list">
    <p>{List}</p>
</div>

<div class="payment">
    <span>Your Payment is {$accounts[$account].balance} bath.</span>
</div>

<button on:click={()=>confirmPayment()}>Confirm Payment</button>
<button on:click={()=>$mode='menu'}>Back to Menu</button>
<style>
    :global(button) {
        display: inline;
    }
</style>

