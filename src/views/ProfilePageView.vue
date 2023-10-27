<template>
    <div>
        <!-- username and biography -->
        <h1 class="name">AhBeng</h1>
        <h1 class="biography">
        Hi friends! Welcome to my page where I share all my favourite Japanese restaurants!
        </h1>

        <!-- Follow Button -->
        <div class="button"><div class="Follow">Follow</div></div>

        <!-- Tab Selector Button -->
        <div class="tabs">
            <div class="tab-container">
                <img class="view-posts-tab" src="view-posts-tab-2.png" alt="View Posts Tab" /> 
                <img class="view-food-lists-tab" src="view-food-lists-tab-2.png" alt="View FoodLists Tab" /> 
            </div>
            <img class="tab-selector" src="tab-selector-10.png" alt="Tab Selector" />
            </div>
        </div>
    
    </div>
</template>
  
<script>
  export default {
    name: "ProfileView",
  }
</script>
  
<style>

    .name {
        letter-spacing: 0;
        line-height: normal;
        min-height: 38px;
        width: 197px;
    }

    .biography {
        letter-spacing: 0;
        line-height: normal;
        min-height: 115px;
        width: 860px;
    }

    .button {
        align-items: center;
        background-color: var (--blue);
        border-radius: 30px;
        display: flex;
        height: 69px;
        justify-content: center; mix-blend-mode: hard-light;
        width: 411px;
    }

    .title {
        height: 36px;
        letter-spacing: 0;
        line-height: normal; margin-top: 1px;
        text-align: center; white-space: nowrap;
        width: 91px;
    }

    .tabs {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 16px;
        min-height: 70px;
        width: 292px;
    }

    .tab-container {
        align-items: flex-start;
        align-self: flex-end;
        display: flex;
        gap: 176px;
        min-width: 272px;
    }

    .view-posts-tab {
        height: 48px;
        width: 48px;
    }

    .view-food-lists-tab {
        cursor: pointer;
        height: 48px;
        transition: all 0.2s ease;
        width: 48px;
    }

    .view-food-lists-tab:hover {
        transform: scale(1.1);
    }

    .tab-selector {
        height: 6px;
        width: 90px;
    }


</style>
  