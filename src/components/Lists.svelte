<script>
    import { onMount } from "svelte";
    import { v4 as uuidv4 } from "uuid";
    import { items } from "../stores";
    import itemAPI from "../API";
    import Item from "./Item.svelte";
    import NewItem from "./NewItem.svelte";

    function handleNewItem(e) {
        // console.log(e);
        $items = [
            {
              id: uuidv4(),
              text: e.detail,
              completed: false
            },
            ...$items
        ];

        itemAPI.save($items);
    }
    
    function handleUpdate(e) {
        // console.log(e);
        const index = $items.findIndex(item => item.id === e.detail.id);
        $items[index] = e.detail;
        itemAPI.save($items);
    }

    function handleDelete(e) {
        // console.log(e);
        $items = $items.filter(item => item.id !== e.detail);
        itemAPI.save($items);
    }

    let itemsSorted = [];

    $: {
        itemsSorted = [...$items];
        itemsSorted.sort((a, b) => {
            if (a.completed && b.completed)
            return 0;

            if (a.completed)
            return 1;

            if (b.completed)
            return -1;
        });
    }

    onMount(async () => {
        // fetch from API
        $items = await Item.getAll();
    });
</script>

<style>
    .list {
        width: 50%;
        padding: 15px;
        background: #3D85C6;
    }

    .list-status {
        width: 50%;
        margin: 0;
        text-align: center;
        color: #ffffff;
        font-weight: bold;
        font-size: 1.1em;
    }
</style>


<div class="list">
    <NewItem on:newitem={handleNewItem} />
    {#each itemsSorted as item(item)}
        <!-- {JSON.stringify(item)} -->
        <Item {...item} on:update={handleUpdate} on:delete={handleDelete}/>
    {:else}
        <p class="list-status">No Items Exist</p>
    {/each}
</div>