import java.util.ArrayList;
import java.util.List;

class Employee {
    int id;
    String name;
    double salary;
    
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    public void displayDetails() {
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("-------------------------------");
    }
}
public class EmployeeMain {
    public static void main(String[] args) {
        Employee em1 = new Employee(101, "Naveen", 50000.0);
        Employee em2 = new Employee(102, "Rajesh", 60000.0);
        Employee em3 = new Employee(103, "Kavin Kumar", 70000.0);

        List<Employee> employees = new ArrayList<>();
        employees.add(em1);
        employees.add(em2);
        employees.add(em3);

        for (Employee employee : employees) {
            employee.displayDetails();
        }
    }
}
