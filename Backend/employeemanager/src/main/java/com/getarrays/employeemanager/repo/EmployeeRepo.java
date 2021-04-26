package com.getarrays.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.getarrays.employeemanager.model.Employee;

import javax.transaction.Transactional;
import java.util.Optional;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {

    @Transactional
    void deleteEmployeeById(Long id);

    Optional<Employee> findEmployeeById(Long id);
}
