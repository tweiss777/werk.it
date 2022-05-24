import './Listbox.css'

import React, { Fragment, useEffect, useState } from 'react'
import { Listbox as ListboxUI, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import DividerVertical from '../misc/DividerVertical'

const Listbox = (props) => {
    const {
        label,
        entries,
        onChange,
        defaultValue = Object.keys(entries).at(0),
        selected,
        divider,
    } = props
    const [selectedValue, setSelectedValue] = useState(defaultValue)

    useEffect(() => {
        setSelectedValue(selected || defaultValue)
    }, [defaultValue, selected])


    return (
        <>
            <div className="Listbox">
                <ListboxUI value={selectedValue} onChange={onChange}>
                    <ListboxUI.Button className="Listbox button">
                        <span className="label" data-label={label}>
                            {label ? ': ' : ''}
                            {entries[selectedValue]}
                        </span>
                        <span className="icon">
                            <ChevronDownIcon
                                className="h-5 w-5 text-inherit"
                                aria-hidden="true"
                            />
                        </span>
                    </ListboxUI.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxUI.Options className="Listbox options">
                            {entries &&
                                Object.entries(entries).map(
                                    ([value, display], index) => (
                                        <ListboxUI.Option
                                            key={index}
                                            className={({ active }) =>
                                                `option ${
                                                    active ? 'active' : ''
                                                }`
                                            }
                                            value={value}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span
                                                        className={`text ${
                                                            selected
                                                                ? 'selected'
                                                                : ''
                                                        }`}
                                                    >
                                                        {display}
                                                    </span>
                                                    {selected ? (
                                                        <span className="icon selected">
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </ListboxUI.Option>
                                    )
                                )}
                        </ListboxUI.Options>
                    </Transition>
                </ListboxUI>
            </div>
            {divider && <DividerVertical className="text-main"/>}
        </>
    )
}
export default Listbox
