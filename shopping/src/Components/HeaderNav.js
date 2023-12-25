import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

function HeaderNav() {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href='#home'>ShowUwanna</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Button variant="outlined"><HomeOutlinedIcon/></Button>
                        <Button variant="outlined"><CategoryOutlinedIcon/></Button>
                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center me-auto'>
                        <Button variant="outlined"> <SearchIcon /></Button>
                        {/* d-flex -> display:flex; 가로정렬 */}
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="검색할 상품을 입력하세요."
                                className="mr-2"
                                style={ { width : '15rem'}}
                            />
                        </Form>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Button variant="outlined"><PersonOutlineOutlinedIcon/>로그인</Button>
                        <Button variant="outlined"><AccountCircleOutlinedIcon/>회원가입</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNav;