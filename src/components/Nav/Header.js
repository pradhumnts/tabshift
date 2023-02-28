import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Button } from '@mui/material';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';

import IconButtonAnimate from '../../components/animate/IconButtonAnimate';
import MenuIcon from "@mui/icons-material/Menu";
// ----------------------------------------------------------------------
import logo from "./../../assets/logo.png";

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  boxShadow: 'none',
  height: 91,
  borderBottom: "1px solid #7070703b",
  backgroundColor: "white",
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: 92,
    width: `100%`,
    ...(isCollapse && {
      width: `calc(100% - 88px)`,
    }),
    ...(isOffset && {
      height: 64,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: 64,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  isCollapse: PropTypes.bool,
  onOpenSidebar: PropTypes.func,
  verticalLayout: PropTypes.bool,
}

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(92) && !verticalLayout;

  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        <img style={{ height: "auto", width: 234 }} src={logo} alt="" />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {!isDesktop ? (
            <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
              <MenuIcon sx={{ fontSize: "2rem" }} />
            </IconButtonAnimate>
          ) :  
          <div className="nav-links">
            <a href="t" className="nav-link">Services</a>
            <a href="t" className="nav-link">Templates</a>
            <a href="t" className="nav-link">Testimonials</a>
            <a href="t" className="nav-link">About Us</a>
            <a href="mailto:contact@tabshift.io"><Button variant='contained' size="large">Contact</Button></a>
        </div>
          }
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
