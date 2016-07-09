require_once 'API.class.php';
class MyAPI extends API
{    /**
     * Example of an Endpoint
     */
     protected function example() {
        if ($this->method == 'GET') {
            echo "Hello world!";
        } else {
            return "Only accepts GET requests";
        }
     }
 }
