<script>
  import { quintInOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import FlyIn from "./FlyIn.svelte";
</script>

<section class="w-screen h-screen bg-bg">
  <FlyIn className="flex flex-row gap-x-8 justify-center items-center h-full">
    <div
      class="flex flex-row px-[25%] gap-x-8"
      in:fly={{ easing: quintInOut, duration: 1000, delay: 0 }}
    >
      <div class="flex-1">
        <h2 class="py-8 text-6xl text-purple">About Me</h2>
        <p class="text-xl text-lightpink">
          Hello! My name is Jacob Ng, a current high school junior at Brophy
          College Preparatory. I have been learning all sorts of languages like
          Java, Python, HTML, CSS, and Javascript since Freshman year. I love
          music, video games, and fashion. Enjoy the website and my portfolios!
        </p>
      </div>
      <div class="flex-1 aspect-square">
        <img
          src="https://www.jacobng.dev/_astro/jacob1.c0f4a299.jpg"
          alt="Jacob Ng"
        />
      </div>
    </div>
  </FlyIn>
</section>
