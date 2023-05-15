import React from 'react'
import Box from '@mui/material/Box';
import CustomBtn from '../components/Button';
import dashboardImg from '../assets/images/dashboard_img.png'
import { makeStyles } from '@mui/styles';
import StrategyCard from '../components/StrategyCard'
import Slider from "react-slick";
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import InnerNavbar from "../components/InnerNavbar"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Carousel from 'react-grid-carousel'
import StrateChart from '../components/StrategyChart'

const useStyles = makeStyles({
  image: {
    position: 'absolute',
    top: '20px',
    left: '42em',
    width: '31em',
    aspectRatio: '8/7',
  },
  h1: {
    color: 'white',
    lineHeight: '71px',
    fontSize: '3em'
  },
  p: {
    fontSize: '1.3em',
    color: 'white',
    lineHeight: '31px',
    marginBottom: '41px'
  },
  flexBox: {
    display: 'flex',
    alignItems: 'center'
  },
  pageTitle: {
    margin: 0,
    fontWeight: '600',
    fontSize: '2.4em',
    color: '#101828'
  },
  boxStyle: {
    backgroundColor: 'white',
    border: '1px solid #EAECF0',
    boxShadow: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
    borderRadius: '12px',
  },
  accordianContent: {
    color: '#475467',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '24px',
    margin: 0
  },
  valueDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#667085',
    margin: 0,
    marginTop: '16px'
  },
  valueTitle: {
    color: '#101828',
    fontWeight: '500',
    fontSize: '32px',
    marginTop: '32px',
    marginBottom: '16px'
  }
});

const Home = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const accordionExpandHandle = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          backgroundColor: '#332F6B',
          pt: '29px',
          pl: '11%',
          pr: '281px',
          pb: '107px',
        }}
      >
        <Box sx={{width: '543px'}}>
          <h1 className={classes.h1}>Investment made simple and effortless</h1>
          <p className={classes.p}>Invest smartly with our easy-to-use platform. Choose from various carefully planned strategies that match your goals and risk level. Investing is simple and effortless with us.</p>
          <CustomBtn text="Sign Up For Free"/>
        </Box>
        <Box>
          <img className={classes.image} src={dashboardImg} alt='img' />
        </Box>
      </Box>
      <Box sx={{backgroundColor: '#FAFAFF', px: '7%', pt: '88px' }}>
        <Box sx={{display: 'flex', alignItems: 'flex-start', mb: '64px'}}>
          <Box
            className={classes.boxStyle}
            sx={{
              p: '24px',
              mr: '16px',
              width: '67%',
            }}
          >
            <Box sx={{width: '100%'}}>
              <p className={classes.pageTitle}> Top Strategies </p>
              <p
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#667085',
                  lineHeight: '25px',
                }}
              >
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Carousel
                cols={4}
                rows={1}
                gap={11}
                responsiveLayout={[
                  {
                    breakpoint: 1200,
                    cols: 3
                  },
                  {
                    breakpoint: 990,
                    cols: 2
                  }
                ]}
                mobileBreakpoint={670}
              >
                <Carousel.Item key={0}><StrategyCard title="Multiplies Valuation" /></Carousel.Item>
                <Carousel.Item key={1}><StrategyCard title="DCF" /></Carousel.Item>
                <Carousel.Item key={2}><StrategyCard title="TS Momentum" /></Carousel.Item>
                <Carousel.Item key={3}><StrategyCard title="Low Idiosyncratic Beta" /></Carousel.Item>
                <Carousel.Item key={4}><StrategyCard title="Multiplies Valuation" /></Carousel.Item>
                <Carousel.Item key={5}><StrategyCard title="DCF" /></Carousel.Item>
                <Carousel.Item key={6}><StrategyCard title="TS Momentum" /></Carousel.Item>
                <Carousel.Item key={7}><StrategyCard title="Low Idiosyncratic Beta" /></Carousel.Item>
              </Carousel>
            </Box>
          </Box>
          <Box
            className={classes.boxStyle}
            sx={{
              p: '40px',
              width: '33%',
            }}
          >
            <p className={classes.pageTitle} style={{paddingRight: '22px', fontSize:'2em'}}>Analyze Your PortFolio</p>
            <Box>
              <Box className={classes.flexBox}>
                <CheckCircleIcon sx={{fontSize: 'medium', color: '#7F56D9', mr: '21px'}} />
                <p style={{fontSize: '16px'}}>Strategy Quality</p>
              </Box>
              <Box className={classes.flexBox}>
                <CheckCircleIcon sx={{fontSize: 'medium', color: '#7F56D9', mr: '21px'}} />
                <p style={{fontSize: '16px'}}>Best Leverage</p>
              </Box>
              <Box className={classes.flexBox}>
                <CheckCircleIcon sx={{fontSize: 'medium', color: '#7F56D9', mr: '21px'}} />
                <p style={{fontSize: '16px'}}>Optimal Hedging</p>
              </Box>
              <Box className={classes.flexBox}>
                <CheckCircleIcon sx={{fontSize: 'medium', color: '#7F56D9', mr: '21px'}} />
                <p style={{fontSize: '16px'}}>Compare Strategies</p>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxStyle} sx={{p: '32px'}}>
          <Box>
            <p className={classes.pageTitle}>Investment Strategy Groups</p>
            <p style={{color: '#667085', lineHeight: '25px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>
          </Box>
          <InnerNavbar sx={{mb: '40px'}}/>
          <Box sx={{display: 'flex', alignItems: 'flex-start'}}>
            <Box sx={{width: "66%", marginRight: '12px'}}>
              <Box className={classes.flexBox} sx={{pt: '30px'}}>
                <p style={{color: '#101828', fontWeight: '500', fontSize: '32px', marginRight: '17px', marginBottom: '0', marginTop: '0'}}>Value</p>
                <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0188 10.02V1.19994C17.0188 0.881722 16.8922 0.576363 16.6672 0.351362C16.4422 0.126361 16.1371 1.50738e-07 15.8187 1.50738e-07H3.81877C3.41758 -0.000200782 3.04291 0.20049 2.82033 0.534397L0.420248 4.13442H0.420449C0.289064 4.33149 0.21875 4.56312 0.21875 4.79996V22.8001C0.21875 23.1183 0.345111 23.4236 0.570313 23.6486C0.795314 23.8736 1.10049 24 1.41868 24H14.6189C16.9015 24.0016 19.0493 22.92 20.4073 21.0854C21.7652 19.2509 22.1721 16.8807 21.5037 14.698C20.8355 12.5154 19.1713 10.7795 17.0192 10.0197L17.0188 10.02ZM2.61872 5.16315L4.46091 2.39988H14.6186V9.59992C12.7539 9.5969 10.961 10.3185 9.61835 11.6125C8.2758 12.9064 7.48847 14.6717 7.42295 16.5352C7.35746 18.3989 8.0186 20.215 9.26714 21.6001H2.61842L2.61872 5.16315ZM14.6186 21.6003C13.3456 21.6003 12.1247 21.0945 11.2245 20.1943C10.3243 19.2943 9.81866 18.0732 9.81866 16.8002C9.81866 15.5271 10.3243 14.3063 11.2245 13.4061C12.1247 12.5059 13.3456 12.0002 14.6186 12.0002C15.8917 12.0002 17.1125 12.5059 18.0127 13.4061C18.9129 14.3063 19.4186 15.5271 19.4186 16.8002C19.4172 18.0728 18.9109 19.2929 18.0111 20.1927C17.1113 21.0927 15.8913 21.5987 14.6186 21.6003ZM17.8671 15.9517C18.0921 16.1767 18.2186 16.4819 18.2186 16.8003C18.2186 17.1185 18.0921 17.4236 17.8671 17.6486L15.467 20.0487C15.242 20.2737 14.9368 20.4003 14.6186 20.4003C14.3004 20.4003 13.995 20.2737 13.77 20.0487L11.37 17.6486H11.3702C11.067 17.3455 10.9487 16.9037 11.0596 16.4897C11.1705 16.0756 11.4939 15.7522 11.908 15.6411C12.322 15.5302 12.764 15.6486 13.0669 15.9517L13.4185 16.3033L13.4187 14.4002C13.4187 13.9715 13.6473 13.5753 14.0185 13.361C14.3898 13.1466 14.8474 13.1466 15.2187 13.361C15.5899 13.5753 15.8185 13.9715 15.8185 14.4002V16.3033L16.1701 15.9517H16.1703C16.3951 15.7265 16.7005 15.6001 17.0187 15.6001C17.3369 15.6001 17.6421 15.7267 17.8671 15.9517ZM5.65118 4.74452H5.02657C4.77807 4.74452 4.57657 4.94602 4.57657 5.19452V8.00583C4.57657 8.25433 4.77807 8.45583 5.02657 8.45583C5.27508 8.45583 5.47657 8.25433 5.47657 8.00583V7.51886H5.65115C6.14675 7.51886 6.6048 7.25448 6.85248 6.82539C7.10038 6.39608 7.10038 5.86732 6.85248 5.4382C6.60477 5.00889 6.14674 4.74452 5.65118 4.74452ZM5.65118 6.61884H5.4766V5.64452H5.65118C5.92038 5.64452 6.13835 5.8627 6.13835 6.13169C6.13835 6.40069 5.92038 6.61884 5.65118 6.61884ZM10.1986 8.00583L10.1988 5.19452C10.1988 4.94602 10.4003 4.74452 10.6488 4.74452H12.2104H12.2102C12.4589 4.74452 12.6602 4.94602 12.6602 5.19452C12.6602 5.44303 12.4589 5.64452 12.2102 5.64452H11.0986V5.99368H12.2102C12.4589 5.99368 12.6602 6.19518 12.6602 6.44368C12.6602 6.69219 12.4589 6.89368 12.2102 6.89368H11.0986V8.00583H11.0988C11.0988 8.25434 10.8973 8.45584 10.6488 8.45584C10.4001 8.45584 10.1988 8.25434 10.1988 8.00583L10.1986 8.00583ZM7.83731 8.45583H7.99381C8.65678 8.45583 9.26951 8.10206 9.60096 7.5279C9.93244 6.95375 9.93244 6.2464 9.60096 5.67224C9.26949 5.09809 8.65678 4.74452 7.99381 4.74452H7.83731C7.58881 4.74452 7.38751 4.94602 7.38731 5.19452V8.00583C7.38751 8.25433 7.58881 8.45583 7.83731 8.45583ZM8.28732 5.69071C8.54546 5.77408 8.7562 5.96312 8.86671 6.21081C8.9772 6.45851 8.9772 6.74155 8.86671 6.98929C8.75622 7.23719 8.54548 7.42623 8.28732 7.50959V5.69071Z" fill="#667085"/>
                </svg>
              </Box>
              <Accordion expanded={expanded === 'panel1'}  onChange={accordionExpandHandle('panel1')}
                sx=
                  {{
                    boxShadow: 'none',
                    border: 'none',
                    width: '100%',
                    padding: '0px',
                    mt: '0px',
                    '&::before': {
                      content: '""',
                      bgcolor: 'white'
                    },
                  }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    minHeight: 'unset',
                    p: '0px',
                    m: '0px'
                  }}
                >
                  <Typography sx={{m: '0px', color: '#475467', fontSize: '14px', fontWeight: '400'}}>Show Studies</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{
                  bgcolor: '#F9FAFB',
                  borderRadius: '12px',
                  p: '16px'
                }}>
                  <Box>
                    <p className={classes.accordianContent}>1. Kirkpatrick & Dahlquist (2006), p. 3</p>
                    <p className={classes.accordianContent}>2. ^ Jump up to:a b Akston, Dr. Hugh (13 January 2009). "Beating the Quants at Their Own Game".</p>
                    <p className={classes.accordianContent}>3. ^ Mizrach, Bruce; Weerts, Susan (27 November 2007). "Highs and Lows: A Behavioral and Technical Analysis". SSRN 1118080.</p>
                    <p className={classes.accordianContent}>4. ^ Paul V. Azzopardi (2010). Behavioural Technical Analysis: An introduction to behavioural finance and its role in technical analysis. Harriman House. ISBN 978-1905641413.</p>
                    <p className={classes.accordianContent}>5. ^ Andrew W. Lo; Jasmina Hasanhodzic (2010). The Evolution of Technical Analysis: Financial Prediction from Babylonian Tablets to Bloomberg Terminals. Bloomberg Press. p. 150. ISBN 978-1576603499. Retrieved 8 August 2011.</p>
                    <p className={classes.accordianContent}>6. ^ Jump up to:a b Irwin, Scott H.; Park, Cheol-Ho (2007). "What Do We Know About the Profitability of Technical Analysis?". Journal of Economic Surveys. 21 (4): 786–826. doi:10.1111/j.1467-6419.2007.00519.x. S2CID 154488391.</p>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <p className={classes.valueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.</p>
              <p className={classes.valueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.</p>
              <p className={classes.valueTitle}>Lorem Ipsum Dolor</p>
              <p className={classes.valueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.</p>
              <p className={classes.valueTitle}>Summary</p>
              <p className={classes.valueDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.</p>
            </Box>
            <Box sx={{width: "32%", pt: '30px'}}>
              <p style={{color: '#101828', fontWeight: '500', fontSize: '32px', marginBottom: '0', marginTop: '0'}}>Common Strategies</p>
            </Box>
          </Box>
          <Accordion sx={{mt: '40px', backgroundColor: '#FAFAFF'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Show Discussion (56)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );

}

export default Home;
