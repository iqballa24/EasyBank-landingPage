import iconCredit from "../assets/img/icon-online.svg";
import iconBudgeting from "../assets/img/icon-budgeting.svg";
import iconOnBoarding from "../assets/img/icon-onboarding.svg";
import iconAPI from "../assets/img/icon-api.svg";
import imgConfetti from "../assets/img/image-confetti.jpg";
import imgCurrency from "../assets/img/image-currency.jpg";
import imgPlane from "../assets/img/image-plane.jpg";
import imgRestaurant from "../assets/img/image-restaurant.jpg";

export const data = {
  heroSection: {
    title: "Next generation digital bangking",
    text: "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more",
  },
  featureSection: {
    title: "Why use easy bank?",
    text: " We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
    feature: [
      {
        icon: iconCredit,
        name: "Online Bangking",
        desc: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      },
      {
        icon: iconBudgeting,
        name: "Simple Budgeting",
        desc: "See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
      },
      {
        icon: iconOnBoarding,
        name: "Fast Onboarding",
        desc: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
      },
      {
        icon: iconAPI,
        name: "Open API",
        desc: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
      },
    ],
  },
  article: {
    title: "Latest Article",
    data: [
      {
        img: imgCurrency,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        content:
          "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
      },
      {
        img: imgRestaurant,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        content:
          "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
      },
      {
        img: imgPlane,
        author: "Wilson Hutton",
        title: "Take your EasyBank card wherever you go",
        content:
          "We want you to enjoy your travels. This is why we don't charge any fees on purchase while you're abroad. We'll even show you...",
      },
      {
        img: imgConfetti,
        author: "Claire Robinson",
        title: "Our invite-only Beta accounts are now live!",
        content:
          "After a lot of work by the whole team, we're excited to launch our closed beta. It's easy to request  an invite through the site...",
      },
    ],
  },
};
