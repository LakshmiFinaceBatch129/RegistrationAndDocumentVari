package com.fleeter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fleeter.entities.inside.AccountHead;

@Repository
public interface AccountHeadRepository extends JpaRepository<AccountHead, Integer> {

}
