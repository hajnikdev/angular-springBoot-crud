package com.getarrays.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.getarrays.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
}
