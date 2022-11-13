import React from 'react';
import './PopUpMenu.css';
import { IoMdCloseCircle } from 'react-icons/io';
import { HiOutlineHome } from 'react-icons/hi';
import { FaRegFileImage } from 'react-icons/fa';
import { AiOutlinePieChart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function PopUPMenu({ Menu, setMenu }) {
    const MenuOptions = [{ Data: "Home", icon: <HiOutlineHome />, Navigate: true }, { Data: "Images", icon: <FaRegFileImage />, Navigate: true }, { Data: "Board", icon: <AiOutlinePieChart />, Navigate: true }]
    const Navigate = useNavigate();
    const handleMenu = () => {
        try {
            setMenu(!Menu);
        } catch (error) {
            console.log(error);
        }
    }

    const handleOption = (Option) => {
        try {
            switch (Option) {
                case "Home":
                    Navigate("/");
                    handleMenu()
                    break;
                case "Images":
                    Navigate("/Images")
                    handleMenu()
                    break;
                case "Board":
                    Navigate("/Board")
                    handleMenu()
                    break;
                default:
                    Navigate("/")
                    handleMenu()
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='PopUpMenuOverAlldiv'>
            <div className='PopupModel'>
                <div className='HeadingPopupMenu'>Menu List <IoMdCloseCircle className='CloseIcon' onClick={handleMenu} /></div>
                {
                    MenuOptions.map((data) => {
                        return (
                            <div className='PopupMenuOptions' onClick={() => handleOption(data.Data)} key={data.Data + "aa"}>{data.icon} {data.Data}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PopUPMenu