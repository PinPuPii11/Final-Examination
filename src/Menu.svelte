<script>
    import { mode } from './stores.js';
</script>

<p style="font-weight: bold;">***Please select your items before confirming.***</p>
<p style="font-weight: bold;">***Double Click to delete your Lottery from your basket.***</p>

<h2>Available Lottery</h2>
<h4>123456</h4>
<h4>654321</h4>
<h4>789156</h4>
<h4>135789</h4>
<h4>889426</h4>
<h4>685462</h4>

<br><br>
<button on:click={()=>$mode="confirm"}>Confirm</button>
