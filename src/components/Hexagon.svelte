<script lang="ts">
    export let right: number
    export let mt: number
    export let text: string;
    export let imgPath: string;
    export let value: number;


</script>

<div style={`right: -${right}px; clip-path: polygon(48% 0%, 52% 0%, 97% 25%, 97% 75%, 52% 100%, 48% 100%, 3% 75%, 3% 25%); margin-top: -${mt}px; `} 
     class={` relative mask mask-hexagon w-40 aspect-square group bg-slate-600
     hover:scale-[110%] hover:z-10 hover:cursor-pointer select-none transition duration-75 ease-out`}>
    <div style={`background-image: url('${imgPath}')`} 
         class="absolute w-full h-full bg-cover " />
    <h1 class=" absolute bg-black bg-opacity-50 text-white text-center bottom-0 w-full h-2/5
                group-hover:h-[45%] transition-[height] duration-75 ease-in-out">{text}</h1>
</div>