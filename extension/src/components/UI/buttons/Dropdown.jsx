import './Dropdown.css'

import { Children, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Button from '../../UI/buttons/Button'
import { nanoid } from 'nanoid'

const Dropdown = (props) => {
    const {
        children,
        image,
        className,
        title,
        secondary = false,
        round = false,
        noBorder = false,
        right = false,
        only = false,
        chevron = true,
    } = props
    const itemGroups = Children.toArray(children).reduce(
        (prv, cur, arr) => {
            if (cur.type === 'divider') return [...prv, []]
            prv.at(-1).push(cur)
            return prv
        },
        [[]]
    )

    return (
        <div className="Dropdown">
            <Menu as="div" className="menu">
                <Menu.Button as="div" className="button">
                {({ open }) => (
                    <Button
                        image={image}
                        className={`${className ? className : ''} ${open ? 'active' : ''}`}
                        secondary={secondary}
                        round={round}
                        noBorder={noBorder}
                        right={right}
                        only={only}
                    >
                        {title}
                        {chevron && <ChevronDownIcon
                            className="chevron"
                            aria-hidden="true"
                        />}
                    </Button>)}
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="menuItems">
                        {itemGroups.map((group) => {
                            return (
                                <div className="itemsGroup" key={nanoid(7)}>
                                    {group.map(
                                        ({
                                            props: {
                                                children: content,
                                                onClick,
                                                className,
                                            },
                                        }) => {
                                            return (
                                                <Menu.Item key={nanoid(7)}>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={onClick}
                                                            className={`group menuItem ${
                                                                active
                                                                    ? 'active'
                                                                    : ''
                                                            } ${
                                                                className
                                                                    ? className
                                                                    : ''
                                                            }`}
                                                        >
                                                            {content}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            )
                                        }
                                    )}
                                </div>
                            )
                        })}
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default Dropdown
