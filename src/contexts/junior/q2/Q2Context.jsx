import { createContext, useContext, useMemo, useState } from 'react';

const Q2Context = createContext(undefined);

export function useQ2Context() {
  const context = useContext(Q2Context);

  if (context === undefined) {
    throw new Error('useQ2Context must be used within Q2Provider');
  }

  return context;
}

// eslint-disable-next-line react/prop-types
export function Q2Provider({ children }) {
  const [selectedDesserts, setSelectedDesserts] = useState({});

  function addDessert({ id, data }) {
    if (selectedDesserts[id]) return

    setSelectedDesserts(prev => ({
      ...prev,
      [id]: {
        ...data,
        quantity: 1
      }
    }))
  }

  function incrementQuantity(id) {
    const selectedDessert = selectedDesserts[id]

    if (!selectedDessert) return

    setSelectedDesserts(prev => ({
      ...prev,
      [id]: {
        ...selectedDessert,
        quantity: selectedDessert.quantity + 1
      }
    }))
  }

  const selectedDessertsList = useMemo(() => {
    const selectedDessertsArr = Object.entries(selectedDesserts)
      .map(([id, dessert]) => ({ id, ...dessert }))

    const totalPrice = selectedDessertsArr
      .reduce((acc, { quantity, price }) => acc + (quantity * price), 0)

    return { data: selectedDessertsArr, totalPrice, length: selectedDessertsArr.length }
  }, [selectedDesserts])

  const decrementQuantity = (id) => {
    const selectedDessert = selectedDesserts[id]

    if (!selectedDessert) return

    if (selectedDessert.quantity <= 1) {
      setSelectedDesserts(prev => {
        const newPrev = { ...prev }
        delete newPrev[id]

        return newPrev
      })
    } else {
      setSelectedDesserts(prev => ({
        ...prev,
        [id]: {
          ...prev[id],
          quantity: selectedDessert.quantity - 1
        }
      }))
    }
  }

  const resetSelectedDesserts = () => {
    setSelectedDesserts({})
  }

  const value = {
    desserts: [
      {
        id: 1,
        image: {
          thumbnail: "image-waffle-thumbnail.jpg",
          mobile: "image-waffle-mobile.jpg",
          tablet: "image-waffle-tablet.jpg",
          desktop: "image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
      },
      {
        id: 2,
        image: {
          thumbnail: "image-creme-brulee-thumbnail.jpg",
          mobile: "image-creme-brulee-mobile.jpg",
          tablet: "image-creme-brulee-tablet.jpg",
          desktop: "image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00
      },
      {
        id: 3,
        image: {
          thumbnail: "image-macaron-thumbnail.jpg",
          mobile: "image-macaron-mobile.jpg",
          tablet: "image-macaron-tablet.jpg",
          desktop: "image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00
      },
      {
        id: 4,
        image: {
          thumbnail: "image-tiramisu-thumbnail.jpg",
          mobile: "image-tiramisu-mobile.jpg",
          tablet: "image-tiramisu-tablet.jpg",
          desktop: "image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50
      },
      {
        id: 5,
        image: {
          thumbnail: "image-baklava-thumbnail.jpg",
          mobile: "image-baklava-mobile.jpg",
          tablet: "image-baklava-tablet.jpg",
          desktop: "image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00
      },
      {
        id: 6,
        image: {
          thumbnail: "image-meringue-thumbnail.jpg",
          mobile: "image-meringue-mobile.jpg",
          tablet: "image-meringue-tablet.jpg",
          desktop: "image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00
      },
      {
        id: 7,
        image: {
          thumbnail: "image-cake-thumbnail.jpg",
          mobile: "image-cake-mobile.jpg",
          tablet: "image-cake-tablet.jpg",
          desktop: "image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50
      },
      {
        id: 8,
        image: {
          thumbnail: "image-brownie-thumbnail.jpg",
          mobile: "image-brownie-mobile.jpg",
          tablet: "image-brownie-tablet.jpg",
          desktop: "image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50
      },
      {
        id: 9,
        image: {
          thumbnail: "image-panna-cotta-thumbnail.jpg",
          mobile: "image-panna-cotta-mobile.jpg",
          tablet: "image-panna-cotta-tablet.jpg",
          desktop: "image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50
      }
    ],
    selectedDesserts,
    resetSelectedDesserts,
    setSelectedDesserts,
    addDessert,
    incrementQuantity,
    decrementQuantity,
    selectedDessertsList
  }


  return (
    <Q2Context.Provider value={value}>
      {children}
    </Q2Context.Provider>
  );
}
