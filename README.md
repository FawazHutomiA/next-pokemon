# 📌 Pokémon Explorer

A responsive web app built with **Next.js 15 (App Router)** and **Tailwind CSS** that lets you explore Pokémon from [PokéAPI](https://pokeapi.co/).

✨ Features:

* 📋 List of Pokémon with **infinite scroll**
* 🔍 Detailed Pokémon info (About, Base Stats, Moves, Evolution)
* 🎨 Clean card layout with hover effects
* 📊 Interactive progress bars for Base Stats with average indicator
* 🔄 Smooth tab navigation for details
* 📱 Fully responsive design

---

## 🚀 Tech Stack

* **Next.js 15** – React framework with App Router
* **Tailwind CSS** – Utility-first styling
* **Framer Motion** – Animations and interactions
* **PokéAPI** – Free Pokémon API

---

## 📂 Project Structure

```
src/
 ├─ app/
 │   ├─ layout.tsx          # App layout
 │   └─ pokemon/
 │       ├─ page.tsx        # Pokémon list
 │       └─ [name]/
 │           └─ page.tsx    # Pokémon detail
 ├─ components/
 │   ├─ PokemonCard.tsx
 │   ├─ PokemonTypes.tsx
 │   ├─ PokemonTabs.tsx
 │   ├─ PokemonAbout.tsx
 │   ├─ PokemonStats.tsx
 │   ├─ PokemonMoves.tsx
 │   └─ PokemonEvolution.tsx
 └─ lib/
     └─ pokeapi.ts          # API calls
```

---

## 🖼️ Screenshots

### 📋 Pokémon List

Cards with Pokémon name, ID, type, and image. Infinite scroll loads more Pokémon automatically.

### 🔍 Pokémon Detail

Tabbed view with:

* **About** – species, height, weight, abilities
* **Base Stats** – animated progress bars with average indicator
* **Moves** – list of available moves
* **Evolution** – evolution chain preview

---

## ⚡ Getting Started

1. Clone the repo:

   ```bash
   git clone https://github.com/FawazHutomiA/next-pokemon.git
   cd next-pokemon
   ```

2. Install dependencies (pakai pnpm atau npm):

   ```bash
   pnpm install
   # atau
   npm install
   ```

3. Run development server:

   ```bash
   pnpm dev
   # atau
   npm run dev
   ```

4. Open in browser:

   ```
   http://localhost:3000
   ```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the MIT License.

