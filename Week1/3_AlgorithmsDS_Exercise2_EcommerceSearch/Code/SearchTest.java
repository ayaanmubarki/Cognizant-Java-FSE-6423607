public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Laptop", "Electronics"),
            new Product(101, "Shirt", "Clothing"),
            new Product(103, "Mobile", "Electronics"),
            new Product(102, "Shoes", "Footwear")
        };

        // Test Linear Search
        Product foundLinear = LinearSearch.searchById(products, 103);
        System.out.println("Linear Search Result: " + (foundLinear != null ? foundLinear : "Product not found"));

        // Test Binary Search
        Product foundBinary = BinarySearch.searchById(products, 103);
        System.out.println("Binary Search Result: " + (foundBinary != null ? foundBinary : "Product not found"));
    }
}
