import React, { useEffect, useState } from 'react'
import './accordion.css'

const Accordion = () => {
    const [prevSelectedAccItem, setPrevSelectedAccItem] = useState(null);
    const [selectedAccordionItem, setSelectedAccordionItem] = useState(null);

    useEffect(() => {
        if (prevSelectedAccItem && selectedAccordionItem === prevSelectedAccItem) {
            setPrevSelectedAccItem(null);
            setSelectedAccordionItem(null);
        }
    }, [selectedAccordionItem, prevSelectedAccItem]);

    const handleAccordionItemClick = (index) => {
        if (selectedAccordionItem === index) {
            setPrevSelectedAccItem(null);
            setSelectedAccordionItem(null);
        } else {
            setPrevSelectedAccItem(selectedAccordionItem);
            setSelectedAccordionItem(index);
        }
    };

    return (
        <div className='accordion_container'>
            <div className="accordion__item" onClick={() => handleAccordionItemClick(0)}>
                <div className="accordion__title">
                    <div className="accordion__question">How much is my case worth?</div>
                    <div className="accordion__button">
                        <img src="accordionIconBg.png" alt="" />
                        <p className='accordion__button_icon'>+</p>
                    </div>
                </div>
                <div className={`accordion__summary ${selectedAccordionItem === 0 ? 'accordion__item_selected' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae rerum asperiores vitae iste impedit quibusdam laudantium ducimus in cumque natus, commodi odio voluptates quo veniam.</div>
                <hr className='row__seperator' />
            </div>
            <div className="accordion__item" onClick={() => handleAccordionItemClick(1)}>
                <div className="accordion__title">
                    <div className="accordion__question">What should I do right after car accidect</div>
                    <div className="accordion__button">
                        <img src="accordionIconBg.png" alt="" />
                        <p className='accordion__button_icon'>+</p>
                    </div>
                </div>
                <div className={`accordion__summary ${selectedAccordionItem === 1 ? 'accordion__item_selected' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae rerum asperiores vitae iste impedit quibusdam laudantium ducimus in cumque natus, commodi odio voluptates quo veniam.</div>
                <hr className='row__seperator' />
            </div>
            <div className="accordion__item" onClick={() => handleAccordionItemClick(2)}>
                <div className="accordion__title">
                    <div className="accordion__question">How much is my case worth?</div>
                    <div className="accordion__button">
                        <img src="accordionIconBg.png" alt="" />
                        <p className='accordion__button_icon'>+</p>
                    </div>
                </div>
                <div className={`accordion__summary ${selectedAccordionItem === 2 ? 'accordion__item_selected' : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae rerum asperiores vitae iste impedit quibusdam laudantium ducimus in cumque natus, commodi odio voluptates quo veniam.</div>
            </div>
        </div>
    )
}

export default Accordion
