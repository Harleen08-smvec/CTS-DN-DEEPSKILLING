// Big O Notation -> measure efficiency of an algorithm by analayzing how execution time grows as the input size increases.
//compare algorithms and choose most efficient one for large inputs like for this exercise E-commerce Platform Search Function 
// Best Case : Linear->(O(1))  Binary->(O(1)) ELEMENT FOUND IMMEDIATELY
// Worst Case : Linear->(O(n))  Binary->(O(log n)) ELEMENT FOUND AT LAST OR NOT FOUND
// Average Case : Linear->(O(n/2))  Binary->(O(log n)) ELEMENT FOUND IN MIDDLE
import java.util.*;
class Product 
{
    int productId;
    String productName;
    String category;

    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    public String toString() {
        return productId + " " + productName + " " + category;
    }
}
class HarleenSearch
{
    //Linear Search
    public static Product linearSearch(Product[] products, String name)
    {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }
    public static Product binarySearch(Product[] products, String name) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int result =
                products[mid].productName.compareToIgnoreCase(name);

            if (result == 0)
                return products[mid];

            if (result < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }

        return null;
    }

}

public class ECommerceSearchSystem
{
    public static void main(String[] args) {

        Product[] products = {

            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Mouse", "Accessories"),
            new Product(103, "Keyboard", "Accessories"),
            new Product(104, "Monitor", "Electronics")
        };

        Product linearResult =
            HarleenSearch.linearSearch(products, "Keyboard");

        System.out.println("Linear Search Result:");
        System.out.println(linearResult);

        Arrays.sort(products,
                Comparator.comparing(p -> p.productName));

        Product binaryResult =
            HarleenSearch.binarySearch(products, "Keyboard");

        System.out.println("\nBinary Search Result:");
        System.out.println(binaryResult);
    }
}
//est Case (Linear Search): Element found at the first position – O(1)
//Average Case (Linear Search): Element found after checking several items – O(n)
//Worst Case (Linear Search): Element found at the last position or not found – O(n)
//Best Case (Binary Search): Element found at the middle position – O(1)
//Average Case (Binary Search): Search space is repeatedly divided into two halves – O(log n)
//Worst Case (Binary Search): Maximum number of divisions required before finding the element – O(log n)
//Binary Search is more suitable as Search operation becomes faster whereas in Linear Search it should have checked up to 1,000 times for 1,000 items
