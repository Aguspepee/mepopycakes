import { Card } from 'react-bootstrap/';
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Hola</Card.Title>
        <Card.Text>
          <div class="d-flex flex-column">

              <div>
                <a href="https://coreui.io"> GrowUp Digital </a>
                <span> &copy; 2020 creativeLabs.</span>
              </div>
              <div class="ml-auto">
                <span>Powered by</span>
                <a href="https://coreui.io"> CoreUI</a>
              </div>
            
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
    </footer>
  );
}
export default Footer