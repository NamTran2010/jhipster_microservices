package com.leap.employee.repository;

import com.leap.employee.domain.JobHistory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Spring Data SQL repository for the JobHistory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface JobHistoryRepository extends JpaRepository<JobHistory, Long> {
    // Query List JobHistory by EmployeeId
    List<JobHistory> findByEmployeeId(Long employeeId);
}
