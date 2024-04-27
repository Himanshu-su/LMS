import FaceIcon from '@mui/icons-material/Face';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig =

[
 {
   title: 'Dashboard',
   path: '/dashboard/app',
   icon: icon('ic_analytics'),
 },

 {
   title: 'Purchase Order',
   path: '/dashboard/user',
   icon: icon('ic_user'),
  subtitle:[{
   title: 'accepted',
   path: '/dashboard/user',
   icon: icon('ic_user'),
  }]
 },
 {
   title: 'products',
   path: '/dashboard/products',
   icon: icon('ic_cart'),
 },
 {
   title: 'delivery',
   path: '/404',
   icon: icon('ic_blog'),
 },
 {
   title: 'RFQs',
   path: '/404',
   icon: icon('ic_lock'),
 },
 {
   title: 'DRN Concern',
   path: '/404',
   icon: icon('ic_blog'),
 },
 {
   title: 'notification',
   path: '/404',
   icon: <NotificationsActiveIcon/>,
 },
 {
   title: 'profile',
   path: '/dashboard/profile',
   icon: <FaceIcon/>,
 },
]

// const PurchaseDropdown=[{
//   title: 'Accepted',
//   path: '/404',
//   icon: <FaceIcon/>,
// },
// {
//   title: 'In Progress',
//   path: '/404',
//   icon: <FaceIcon/>,
// },
// {
//   title: 'Delivered',
//   path: '/404',
//   icon: <FaceIcon/>,
// },
// {
//   title: 'Rejected',
//   path: '/404',
//   icon: <FaceIcon/>,
// },
// {
//   title: 'Closed',
//   path: '/404',
//   icon: <FaceIcon/>,
// }
// ]

export  default navConfig
