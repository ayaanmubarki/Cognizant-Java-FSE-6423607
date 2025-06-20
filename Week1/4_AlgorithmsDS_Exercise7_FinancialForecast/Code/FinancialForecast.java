import java.util.Scanner;

public class FinancialForecast {

    // Recursive method to predict future value
    public static double forecastValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        }
        return forecastValue(initialValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Taking user input
        System.out.print("Enter initial value: ");
        double initialValue = scanner.nextDouble();

        System.out.print("Enter annual growth rate in percentage: ");
        double growthRatePercent = scanner.nextDouble();
        double growthRate = growthRatePercent / 100.0;

        System.out.print("Enter number of years to forecast: ");
        int years = scanner.nextInt();

        // Calling recursive function
        double futureValue = forecastValue(initialValue, growthRate, years);
        System.out.printf("Forecasted value after %d years: %.2f\n", years, futureValue);

        scanner.close();
    }
}
