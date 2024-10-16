import React, { lazy } from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

export default function Header() {
    const start = <img alt="logo" src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png" height="40" className="mr-2"></img>;

    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
        </div>
    );

    const items = [
        {
            label: 'Recipe',
            icon: 'pi pi-home',
            url: '/'
        },
        {
            label: 'Category',
            icon: 'pi pi-star',
            url: '/category'
        },
        {
            label: 'Country',
            icon: 'pi pi-reddit',
            url: '/country'
        },
        {
            label: 'Random Meal',
            icon: 'pi pi-circle-fill',
            url: '/random'
        }
    ];

  return (
    <>
        <Menubar model={items} start={start} end={end} />
    </>
  )
}
