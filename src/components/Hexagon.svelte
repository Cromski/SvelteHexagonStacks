<script lang="ts">
    export let right: number
    export let mt: number
    export let text: string;
    export let imgPath: string;
    export let value: number;

    const bing = () => console.log(value)

    let hover = false;

    $: console.log("hover: " + hover)

</script>



<div style={`right: -${right}px; clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); margin-top: -${mt}px; ${hover ? 'scale: 110%; z-index: 80':'z-index:0'}
    transition: scale 0.5s
    `} 
     class={` relative mask mask-hexagon w-40 aspect-square`}>

    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[20%] left-[40%] h-[98%] top-[1%]  bg-cover z-50" /> 
    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[35%] left-[32%] h-[90%] top-[5%]  bg-cover z-50" /> 
    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[55%] left-[22.5%] h-[80%] top-[10%] bg-cover z-50" /> 
    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[68%] left-[15%] h-[70%] top-[15%]  bg-cover z-50" /> 
    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[80%] left-[10%] h-[60%] top-[20%]  bg-cover z-50" /> 
    <div on:mouseenter={() => hover = true} on:mouseleave={() => hover = false} class="absolute w-[90%] left-[5%] h-1/2 top-[25%]  bg-cover z-50" /> 
    <div style={`background-image: url('${imgPath}')`} class="absolute w-full h-full bg-cover " />
    <h1 style={`${hover ? 'height: 45%' : 'height: 40%'}; transition: height 0.2s`} class=" absolute bg-black bg-opacity-50 text-white text-center bottom-0 w-full">{text}</h1>
</div>