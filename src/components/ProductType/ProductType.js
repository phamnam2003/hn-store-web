import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";

import { BookIcon, BottleIcon, CarIcon, DeviceIcon, DoorIcon, GameIcon, HousewareIcon, LipstickIcon, MilkBottleIcon, MobileIcon, MoneyBagIcon, MoreIcon, PumpsIcon, RemoteIcon, ShirtIcon, SkirtIcon, SportIcon, TicketIcon, WatchIcon } from "~/components/Icons";
import Menu  from "~/components/Popper/Menu";
import styles from "./ProductType.module.scss";
import ProductTypeItem from "~/components/ProductTypeItem";

const cx = classNames.bind(styles);

const PRODUCT_TYPE = [
    {
        id: 1,
        icon: <SkirtIcon/>,
        leftTitle: 'Thời trang nữ',
        middleTitle: '',
        rightTitle: ''
    },
    {
        id: 2,
        icon: <ShirtIcon/>,
        leftTitle: 'Thời trang nam',
        middleTitle: '',
        rightTitle: ''
    },
    {
        id: 3,
        icon: <LipstickIcon/>,
        leftTitle: 'Sức khỏe',
        middleTitle: '',
        rightTitle: 'Làm đẹp'
    },
    {
        id: 4,
        icon: <PumpsIcon/>,
        leftTitle: 'Giày dép',
        middleTitle: '',
        rightTitle: 'Túi xách'
    },
    {
        id: 5,
        icon: <WatchIcon/>,
        leftTitle: 'Đồng hồ',
        middleTitle: '',
        rightTitle: 'Trang sức'
    },
    {
        id: 6,
        icon: <MobileIcon/>,
        leftTitle: 'Điện thoại',
        middleTitle: '',
        rightTitle: 'Laptop'
    },
    {
        id: 7,
        icon: <DeviceIcon/>,
        leftTitle: 'Phụ kiện công nghệ',
        middleTitle: '',
        rightTitle: ''
    },
    {
        id: 8,
        icon: <HousewareIcon/>,
        leftTitle: 'Điện gia dụng',
        middleTitle: '',
        rightTitle: 'Điện máy'
    },
    {
        id: 9,
        icon: <DoorIcon/>,
        leftTitle: 'Nhà cửa',
        middleTitle: '',
        rightTitle: 'Tân trang nhà'
    },
    {
        id: 10,
        icon: <RemoteIcon/>,
        leftTitle: 'Tivi',
        middleTitle: 'Âm thanh',
        rightTitle: 'Camera'
    },
    {
        id: 11,
        icon: <BookIcon/>,
        leftTitle: 'Đời sống',
        middleTitle: 'Sách',
        rightTitle: 'VPP'
    },
    {
        id: 12,
        icon: <BottleIcon/>,
        leftTitle: 'Bách hóa',
        middleTitle: '',
        rightTitle: 'Thú cưng'
    },
    {
        id: 13,
        icon: <MilkBottleIcon/>,
        leftTitle: 'Mẹ & bé',
        middleTitle: '',
        rightTitle: 'Đồ chơi'
    },
    {
        id: 14,
        icon: <GameIcon/>,
        leftTitle: 'Tiện ích',
        middleTitle: '',
        rightTitle: ''
    },
    {
        id: 15,
        icon: <MoneyBagIcon/>,
        leftTitle: 'Vay tiền mặt',
        middleTitle: '',
        rightTitle: ''
    },
    {
        id: 16,
        icon: <TicketIcon/>,
        leftTitle: 'Vé máy bay',
        middleTitle: 'Tour',
        rightTitle: 'Du lịch'
    },
    {
        id: 17,
        icon: <CarIcon/>,
        leftTitle: 'Ô tô',
        middleTitle: 'Xe máy',
        rightTitle: 'Xe đạp'
    },
    {
        id: 18,
        icon: <SportIcon/>,
        leftTitle: 'Thể thao',
        middleTitle: '',
        rightTitle: 'Dã ngoại'
    },
]

function ProductType () {
    return (
        <div className={cx('wrapper')}>
            <Tippy 
                interactive
                offset={[35, 15]}
                delay={[200, 200]}
                placement='bottom'
                render={attrs => (
                    <div {...attrs}>
                        <Menu>
                            {PRODUCT_TYPE.map(productType => (
                                <ProductTypeItem 
                                    key={productType.id} 
                                    icon={productType.icon} 
                                    leftTitle={productType.leftTitle}
                                    middleTitle={productType.middleTitle}
                                    rightTitle={productType.rightTitle}
                                />
                            ))}
                        </Menu>
                </div>
                )}
            >
                <div className={cx('content')}>
                    <MoreIcon/>
                </div>
            </Tippy>
        </div>
    );
}

export default ProductType;