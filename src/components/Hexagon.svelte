<script lang="ts">
    export let text: string;
    export let imgPath: string;
</script>

<div class="relative mask mask-hexagon w-40 aspect-square">
    <div style={`background-image: url('${imgPath}')`} class="absolute w-full h-full bg-cover" >

    </div>
    
    <h1 class=" absolute bg-black bg-opacity-50 text-white text-center bottom-0 h-[40%] w-full">{text}</h1>
</div>
<!-- <img class="w-full h-full" src="./images/karate.jpg" alt="asdffffff"> -->
