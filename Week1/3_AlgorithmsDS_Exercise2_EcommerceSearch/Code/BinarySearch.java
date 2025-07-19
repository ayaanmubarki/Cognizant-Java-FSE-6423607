import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {
    public static Product searchById(Product[] products, int id) {
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));

        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int midId = products[mid].getProductId();
            if (midId == id) return products[mid];
            else if (midId < id) left = mid + 1;
            else right = mid - 1;
        }
        return null;
    }
}
