<script lang="ts">
    export let right: number
    export let mt: number
    export let text: string;
    export let imgPath: string;
    export let value: number;

    const bing = () => console.log(value)

</script>

<div style={`right: -${right}px; margin-top: -${mt}px`} class={`relative mask mask-hexagon w-40 aspect-square hover:scale-[120%] hover:z-20`}>
    <div style={`background-image: url('${imgPath}')`} class="absolute w-full h-full bg-cover overflow-hidden" />
    <h1 class=" absolute bg-black bg-opacity-50 text-white overflow-hidden text-center bottom-0 h-[40%] w-full">{text}</h1>
</div>