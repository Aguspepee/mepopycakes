import { Card } from 'react-bootstrap/';

function Footer() {
    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>Hola</Card.Title>
                <Card.Text>
                <div class="d-flex flex-column">
  <footer class="footer">
    <div>
      <a href="https://coreui.io"> GrowUp Digital </a>
      <span> &copy; 2020 creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span>Powered by</span>
      <a href="https://coreui.io"> CoreUI</a>
    </div>
  </footer>
</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
export default Footer