<template>
  <div class="relative">
    <NavbarVue></NavbarVue>
    <div class="flex justify-between w-full absolute top-40 -left-4">
      <SideBar :icon="SideBarProps"></SideBar>
      <div
        class="flex flex-col lg:flex-row justify-center relative items-center mx-12 lg:mx-28"
      >
        <div class="">
          <h3 class="lg:text-[35px] text-[20px] font-light">
            Muhammad Farish Asqalani
          </h3>
          <h3 class="font-medium font-fredoka text-[50px] lg:text-[90px]">
            FULL STACK DEVELOPER
          </h3>
          <p class="font-fredoka lg:text-[20px]">
            A junior fullstack developer who currently focused on Web and Mobile
            Development. I love to learn new things and always open to new
            opportunities
          </p>
        </div>
        <!-- <div
          class="bg-[url('../assets/img/farish.png')] lg:w-[50%] w-96 p-5 h-96 bg-no-repeat"
        ></div> -->
        <img src="../assets/img/farish.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  CommandLineIcon,
} from "@heroicons/vue/24/solid";
import NavbarVue from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";

const SideBarProps = [
  {
    icon: HomeIcon,
    tooltip: "Home",
  },
  {
    icon: UserIcon,
    tooltip: "About Me",
  },
  {
    icon: CommandLineIcon,
    tooltip: "Project",
  },
  {
    icon: PhoneIcon,
    tooltip: "Contact",
  },
];
</script>
